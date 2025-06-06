const contentful = require('contentful');
const { Client } = require('@opensearch-project/opensearch');

require('dotenv').config();

// Connect to Contentful
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

// Connect to OpenSearch
const osClient = new Client({
  node: 'https://localhost:9200',
  auth: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  },
  ssl: {
    rejectUnauthorized: false
  }
});

async function syncContent() {
  try {
    const entries = await client.getEntries({ content_type: process.env.CONTENTTYPE });

    for (const entry of entries.items) {
      const doc = {
        id: entry.sys.id,
        title: entry.fields.title,
        description: entry.fields.description,
        updatedAt: entry.sys.updatedAt,
      };

      await osClient.index({
        index: process.env.INDEX_NAME,
        id: entry.sys.id,
        body: doc
      });

      console.log(`Indexed entry ${entry.sys.id}`);
    }
  } catch (err) {
    console.error('Error syncing:', err);
  }
}

syncContent();