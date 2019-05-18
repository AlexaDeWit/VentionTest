# Vention Interview Test

## Getting It Running

### Prerequisites

- A recent version of NodeJS/yarn
  - https://nodejs.org/en/download/
  - After installation: `npm install --global yarn`
- Git
  - This is necessary unless one alters the Gemfile, as a fork is required to support the Windows 10 platform.
  - https://git-scm.com/downloads
- A working version of a ruby environment management tool (rvm etc)
  - This varies by platform greatly. At present is expected that the evaluator has already performed this step.
- SQLlite3 installed (required for the ruby gem)
  - This also varies greatly by platform, but is a typical requirement of early rails project. As such this is assumed based on the same reasoning as the ruby environment.


### FrontEnd

To run the application in development mode:

- Install the pre-requisite packages via `yarn install`
- Start the development server via `yarn start`
- Requests should be proxies through the front-end to the backend.

Production and staging configurations were decided to be out of scope of an assignment, and as such have not been configured. They may work out of the box, they may not.

### Backend

An important note. As this was developed on a Windows 10 operating system, the sqlite3 gem has been changed out.

If one is using the application from another operating system and encountering issues due to this, please update the `Gemfile` to use the normal `sqlite3` gem, rather than the specified fork.

To run the application in development mode:

- Install the ruby dependencies via `bundle install`
- Seed the database with the product information (the flowers) `rails db:seed`
- Start Rails via Puma in development mode using `rails server`


## Notes Regarding Design Choices

At present my full-time personal development machine is in storage in preparation for my move. As such this project was implemented on a Surface Go, which runs Windows 10 Home.

As a consequence of this, Docker is not viable to run. My initial intention was to allow the evaluator to simply `docker-compose up`.

Additionally as a consequence of this, using a more robust database implementation would require a global installation, instead of temporary containers. (That or provisioning cloud resources and using a remote DB.)

To this end, the "easy route" has been taken of simply using SQLlite3. That said, from the perspective of a rails app using ActiveRecord, the distinction loses considerable importance due to the ORM abstraction layer.

## Unfinished Tasks that would be logical continuations

Scope is something that, if allowed to, never stops growing. As such I have recognized some items that would be intuitively valuable would this be a "real" product, but for which there in practice have little return on their investment in this context.


- Using local storage to cache the cart on the client side.
- Server-Side caching of product cart for promotional materials and reminders (Presumes user contexts and access to email address)
- General analytics
- Rspec definitons for the services
- Swagger definition of endpoints

In general I have tried to strike a balance between demonstration of competency, and overinvestment in a piece of software that is definitionally intended to be discarded.

If something appears missing, please discuss with me. It may have been omitted for this purpose, or it may be an opportunity for me to learn and grow through that conversation. I say "worth it" in both cases!