# My Little Warriors

This is my answer for Captain Contrat
[test](https://github.com/captaincontrat/jobs).

## Usage

If you use [RVM](https://rvm.io/), ruby 2.4.1 (version of ruby used
for the development of this app) should be automatically
used.

### First run

Prefill the database with characters and fights by running:

    `bundle install`
    `rails db:setup`

Please, note that seeds pick name, power, toughness and picture
profile randomly in limited list of choices, so some characters can
have same name or picture profile.

### Dev server

Please run the dev server and visit 0.0.0.0:3000

    `rails s`

## What I've done until now

- [x] front page with a message
- [x] prefill the front page with characters
- [x] CRUD on characters
- [x] Launch Fights
- [x] List all past fights
- [x] Show some fight metrics on characters
- [ ] Smart algo for fights (for example by running it in a worker)
- [ ] Xp points
- [ ] use weapons / shields
- [ ] add tests with Rspec, outch :-(
- [ ] internationalization

## Technical choices

- Rails 5.1.5
- Ruby 2.4.1
- node 8.x for assets build
- character CRUD is made with classic RoR best practises (I hope so !)
- Fights management is fully handled with React
- Bootstrap 4 for styling (I like flex box)
- Assets build is managed with Webpacker
- JS files follow conventions from
  [prettier](https://github.com/prettier/prettier) with no semi-commas
  and single quotes (except in jsx code blocks)
- ruby files formatting is managed by Rubocop as Captain Contrat use
  this gem. I never use Rubocop before personally and run it in app
  folder with `rubocop --auto-correct` command.
