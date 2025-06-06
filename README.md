
# OpenSearch + Contentful Integration

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

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/opensearch-contentful.git
   cd opensearch-contentful
   ```

2. Create a `.env` file in the project root with the following variables:

   ```env
   CONTENTFUL_SPACE_ID=your_contentful_space_id
   CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
   OPENSEARCH_PASSWORD=your_opensearch_password
   ```

3. Start OpenSearch and OpenSearch Dashboards with Docker Compose:

   ```bash
   docker compose up -d
   ```

4. Verify containers are running:

   ```bash
   docker ps
   ```

---

## Usage

- Access OpenSearch Dashboards UI at: `http://localhost:5601`
- Use your Contentful syncing script or app to push data into OpenSearch
- Query OpenSearch via REST API or use Dashboards to build visualizations

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

---

## License

MIT © Your Name
# opensearch-contentful-integration
