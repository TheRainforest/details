const cassandra = require('cassandra-driver');
const schema = require('./schema.js');

const client = new cassandra.Client({
  contactPoints: ['localhost:9042'],
  localDataCenter: 'datacenter1',
});

client.connect()
  .then(() => {
    console.log('Successfully connected to Cassandra');
  })
  .then(() => {
    client.execute("CREATE KEYSPACE IF NOT EXISTS itemdetails WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1}");
    console.log('Keyspace created. Now cleaning up keyspace.');
  })
  .then(() => {
    client.execute('DROP TABLE IF EXISTS itemdetails.details')
    console.log('Table dropped. Now creating table "details".');
  })
  .then(() => {
    client.execute(schema)
    console.log('Table created. attempting to run dsbulk load');

  })
  .then(() => {
    // eslint-disable-next-line quotes
    client.execute(`dsbulk load --schema.keyspace itemdetails --schema.table details --connector.csv.url "/HR_working/item-details/PGdetailsSmall.csv" -delim '|'`)
      .then(() => { console.log('the db is seeded'); })
      .catch(() => { console.log('dsbulk did not work'); });
  })

  .catch((err) => {
    console.error('Error connecting to Cassandra', err);
  });