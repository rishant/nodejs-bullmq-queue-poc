const { Worker } = require('bullmq');

async function main() {
   
    const worker = new Worker('email-queue', async job => {
      console.log('Processing job with data:', job.data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return 'Job processed successfully';
    }, {
        connection: {
            host: 'localhost',
            port: 6379
        }
    });

    worker.on('completed', job => {
        console.log(`${job.id} has completed!`);
    });
      
    worker.on('failed', (job, err) => {
      console.error(`Job ${job.id} failed with error: ${err.message}`);
    });
  
    console.log('Worker started');
}
  
main().catch(console.error);
