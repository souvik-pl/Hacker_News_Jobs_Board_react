import { useEffect, useState } from "react";
import styles from "./App.module.css";
import JobCard from "./JobCard/JobCard";
import { Job } from "./models/models.type";

function App() {
    const baseURL: string = "https://hacker-news.firebaseio.com/v0";
    const count: number = 6;
    const [offset, setOffset] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [jobIdList, setJobIdList] = useState<number[]>([]);
    const [jobDetailList, setJobDetailList] = useState<Job[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        setIsLoading(true);
        let idList: number[] = jobIdList;
        if (idList.length === 0) {
            const response = await fetch(`${baseURL}/jobstories.json`);
            idList = await response.json();
            setJobIdList(idList);
        }

        const currentPageIdList: number[] = idList.slice(offset, offset + count);
        const currentPageData = await Promise.all(
            currentPageIdList.map(id => fetch(`${baseURL}/item/${id}.json`).then(res => res.json()))
        );
        setJobDetailList([...jobDetailList, ...currentPageData]);
        setIsLoading(false);
        setOffset(offset + count);
    }

    return (
        <div className={styles.container}>
            <header>
                <h1>Hacker News Jobs Board</h1>
            </header>
            <main>
                {
                    jobDetailList.length === 0 && isLoading ? (
                        <div className={styles.loader}>
                            Loading...
                        </div>
                    ) : (
                        jobDetailList.map(jobDetail => <JobCard key={jobDetail.id} job={jobDetail}/>)
                    )
                }
            </main>
            {
                jobDetailList.length > 0 && (offset < jobIdList.length) && (
                    <button onClick={fetchData} disabled={isLoading} className={styles.btn}>
                        {
                            isLoading ? "Loading..." : "Load more jobs"
                        }
                    </button>
                )
            }
        </div>
    );
}

export default App;


