import express from 'express';
import { crawl } from './crawl';
import { extract } from './extract';

// crawl();
const app = express();

app.get('/', (req, res) => res.send('hello'));
app.get('/crawl', async (req, res) => {
	const result = await crawl();
	// res.send(result);
	// crawl().then(result => res.send(result));
	res.send(extract(result).join(',<br/>\n'));

});
app.listen(8080, () => {
	console.log('server started!');
});