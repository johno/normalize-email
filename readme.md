# normalize-email [![Build Status](https://secure.travis-ci.org/johnotander/normalize-email.png?branch=master)](https://travis-ci.org/johnotander/normalize-email)

Normalize emails for uniqueness validation. This will convert the email to lowercase, remove dots (`.`), and plus signs
followed by arbitrary strings (`+foobar`).

Based on [normailize](https://github.com/soundcloud/normailize).

## Installation

```bash
npm install --save normalize-email
```

## Usage

```javascript
var normalizeEmail = require('normalize-email')

normalizeEmail('johnotander@GMAIL.com')         // => 'johnotander@gmail.com'
normalizeEmail('john.o.t.a.n.d.e.r@gmail.com')  // => 'johnotander@gmail.com'
normalizeEmail('johnotander@googlemail.com')    // => 'johnotander@gmail.com'
normalizeEmail('johnotander+foobar@gmail.com')  // => 'johnotander@gmail.com'
normalizeEmail('JOHN.OTANDER+OHAI@gmail.com')   // => 'johnotander@gmail.com'
```

## Normalization Rules

Normalization rules vary by domain. The rules implemented by this package are:
1. "plus" &mdash; remove first `+` mark and anything after it
1. "dot" &mdash; remove all `.` marks
1. "none" &mdash; do nothing

Emails are normalized by domain as follows:
1. `gmail.com` &mdash; plus and dot
1. `googlemail.com` (alias of gmail.com) &mdash; plus and dot
1. hotmail.com &mdash; plus only
1. live.com &mdash; plus only
1. outlook.com &mdash; plus only
1. all other domains &mdash; none

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
