# Hacker News Jobs Board
The Hacker News Jobs Board is a React application that fetches and displays the latest job postings from the Hacker News API. The job board includes essential information such as job title, poster, and date posted. This is a problem that belongs to https://www.greatfrontend.com/

## Requirements

1. **Initial Load:** The page initially displays 6 job postings.
2. **Load More Functionality:** Users can click the "Load more" button to load the next page of 6 postings. The "Load more" button is not visible if there are no more postings to load.
3. **Job Details:** If a `url` field is available in the job details, the job title becomes a link. Clicking on the job title link opens the job details page in a new window.
4. **Timestamp Format:** The timestamp is formatted in a user-friendly way.

## Installation
- Pull this branch into your local system.
- Make sure you have Node installed (preferrably Node v18.17.1).
- Navigate to the project directory and run 
  ```
  npm install
  ```
- Once all the dependencies have been installed, run the following command to start the dev server.
  ```
  npm run dev
  ```