# consensus-draw

<p align="center">
    <img
      src="http://res.cloudinary.com/dnh3we6el/image/upload/v1519941321/NeoResearch-Logo.png"
      width="125px;">
</p>

This is an open-source effort for providing better comprehension of Neo Consensus.

Suggested reading:
[Practical
Byzantine
Fault
Tolerance](http://pmg.csail.mit.edu/papers/osdi99.pdf)


## Drawing messages from NEO Consensus

<p align="center">
    <img
      src="./example-commit.jpeg"
      width="420px;">
</p>

<p align="center">
    <img
      src="./example-changeview.jpeg"
      width="420px;">
</p>

## How to use

### Meaning of lines and messages

Horizontal purple lines indicate Primary Timeouts (gray indicate regular timeouts).

Orange indicates prepare requests.
Green indicates prepare responses.
Blue indicates commits.
Red indicates change view messages.

Horizontal black and red indicate block relay and persist, respectively.


### Node express server

`npm install`

RUN: `runConsensusDraw.sh`

**ACCESS:** `http://localhost:20000`

An example will be created automatically with `generateExample.sh`

Or... get it from running neocompiler-eco: `./getremotelog/getconsensuslog.sh`


## License

The code is **MIT Licensed** (except for express indications).

NeoResearch 2018
