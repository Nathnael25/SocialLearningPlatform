const express = require ("express");

const app = express();

app.use(express.static('static'));

const issues = [
    {
    id: 1, status: 'Open', owner: 'Ravan',
    created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
    title: 'Error in console when clicking Add',
    },
    {
    id: 2, status: 'Assigned', owner: 'Eddie',
    created: new Date('2016-08-16'), effort: 14, 
   completionDate: new Date('2016-08-30'),
    title: 'Missing bottom border on panel',
    },
   ];

   app.get('/api/issues', (req,res)=>{
    const metaData = {totalCount : issues.length};
    res.json({_metaData: metaData, records: issues});
   });

   app.listen(3000, () => {
    console.log('App started on port 3000');
   });