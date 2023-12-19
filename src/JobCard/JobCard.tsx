import { JobCardProp } from "../models/models.type";
import styles from "./JobCard.module.css";

function JobCard(props: JobCardProp) {
    const time: string = new Date(props.job.time*1000).toLocaleString();
    return (
        <div className={styles.container}>
            <a 
                className={props.job.url ? `${styles.title} ${styles.url}` : `${styles.title}`}
                href={props.job.url}
                target="_blank"
            >
                {props.job.title}
            </a>
            <p className={styles.info}>
                By {props.job.by} | {time}
            </p>
        </div> 
    )
}

export default JobCard;