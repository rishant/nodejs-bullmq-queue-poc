const {Queue} = require('bullmq')

const notificationQueue = new Queue('email-queue', {
    connection: {
        host: 'localhost',
        port: 6379
    }
})

async function init() {
    const res = await notificationQueue.add('email to rishant', {
        email: "rishantgupta007@gmail.com", 
        subject: "Welcome to bullmq poc course"
    });
    console.log("Job added to queue ", res.id);
}

init();