import rateLimit from 'express-rate-limit';
import { MongoClient } from 'mongodb';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // Allow up to 5 requests per user within the 15-minute window
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Apply rate limiting middleware
    limiter(req, res, async () => {
      const { fullName, email } = req.body;

      // Replace with your MongoDB Atlas connection string
      const username = process.env.MONGODB_USER;
      const password = process.env.MONGODB_PASSWORD;
      const uri = `mongodb+srv://${username}:${password}@cluster0.leuhzjq.mongodb.net/?retryWrites=true&w=majority`;

      const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      try {
        await client.connect();
        const db = client.db('nosiy_mailing');
        const collection = db.collection('landing page');

        // Insert the data into the collection
        const result = await collection.insertOne({ fullName, email });

        res.status(200).json({ message: 'Form submitted successfully', result });
      } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ message: 'An error occurred while submitting the form' });
      } finally {
        await client.close();
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
