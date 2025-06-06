
# OpenSearch + Contentful Integration
![login](/screenshots/login.png)

This project demonstrates how to integrate **Contentful** CMS data with **OpenSearch** for advanced search and analytics capabilities. The setup uses Docker Compose to run OpenSearch and OpenSearch Dashboards locally.

---

## Features

- Sync content from Contentful into OpenSearch
- Run OpenSearch and OpenSearch Dashboards using Docker Compose
- Query and visualize Contentful data with OpenSearch Dashboards
- Easily extendable to build custom search APIs or frontend apps

---

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed
- Contentful account with a valid Space ID and Access Token

---

## File Directory
opensearch-contentful-integration/
├── docker-compose.yml # Docker setup for OpenSearch and Dashboards
├── .env # Environment variables (Contentful & OpenSearch)
├── sync.js # Script to sync Contentful entries into OpenSearch
├── README.md # Project documentation
├── package.json # Node.js dependencies and scripts
└── node_modules/ # Installed packages

---

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/jabercrombia/opensearch-contentful-integration.git
   cd opensearch-contentful-integration
   ```

2. Create a `.env` file in the project root with the following variables:

   ```env
   CONTENTFUL_ACCESS_TOKEN=
   CONTENTFUL_SPACE_ID=
   USERNAME=
   PASSWORD=
   CONTENTTYPE=
   INDEX_NAME=
   ```
   **CONTENTFUL_ACCESS_TOKEN**
can be found in Settings > API KEYS > APIs > Content Delivery API - access token field
   
   **CONTENTFUL_SPACE_ID**
   can be found in Settings > API KEYS > APIs > Space ID field
   
   **CONTENTTYPE**
   You can find the content type in your content model

   **USERNAME**
   This is the username you will need to login to the Opensearch dashboard
  
   **PASSWORD**
   This is the password you will need to login to the Opensearch dashboard

   **INDEX_NAME**
   Create a name for the index in Opensearch
   
3. Start OpenSearch and OpenSearch Dashboards with Docker Compose:

   ```bash
   docker compose up -d
   ```

4. Verify containers are running:

   ```bash
   docker ps
   ```
5. In your terminal in the root directory of the project run the below script. This will pull in the specific content id defined in your .env file into opensearch.
   ```
   node sync.js
   ```
---

## Usage

Navigate to `http://localhost:5601/app/dev_tools#/console` and copy the below into the console and click the play button on the right side.

```
GET /contentful-index/_search
{
  "query": {
    "multi_match": {
      "query": "{search term}",
      "fields": ["title", "description", "body"]
    }
  }
}
```
![console dashboard](/screenshots/console-search.png)
---

## Troubleshooting

- If container name conflicts occur, remove existing containers:

  ```bash
  docker stop opensearch opensearch-dashboards
  docker rm opensearch opensearch-dashboards
  ```

- Check container logs for errors:

  ```bash
  docker logs opensearch
  docker logs opensearch-dashboards
  ```

- Ensure your `.env` variables are correctly set and loaded

---

## Next Steps

- Build a backend API to query OpenSearch data programmatically
- Create a frontend app to visualize and search Contentful data
- Automate Contentful data sync with webhooks or scheduled jobs

