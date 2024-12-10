const fs = require('fs');
const path = require('path');

test('La página contiene el texto "Hola Mundo"', () => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    expect(html).toContain('Hola Mundo');
});
