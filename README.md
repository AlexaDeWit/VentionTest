# Vention Interview Test

## Getting It Running

### Prerequisites

- A recent version of NodeJS/yarn
- A working version of a ruby environment management tool (rvm etc)
- SQLlite3 installed (required for the ruby gem)


### FrontEnd

To run the application in development mode:

- Install the pre-requisite packages via `yarn install`
- Start the development server via `yarn start`
- Requests should be proxies through the front-end to the backen.

Production and staging configurations were decided to be out of scope of an assignment, and as such have not been configured. They may work out of the box, they may not.

### Backend

An important note. As this was developed on a Windows 10 operating system, the sqlite3 gem has been changed out.

If one is using the application from another operating system and encountering issues due to this, please update the `Gemfile` to use the normal `sqlite3` gem, rather than the specified fork.

To run the application in development mode:

- Install the ruby dependencies via `bundle install`
- Start Rails via Puma in development mode using `rails server`


## Notes Regarding Design Choices

At present my full time personal development machine is in storage in preparation for my move. As such this project was implemented on a Surface Go, which runs Windows 10 Home.

As a consequence of this, Docker is not viable to run. My initial intention was to allow the evaluator to simply `docker-compose up`.

Additionally as a consequence of this, using a more robust database implementation would require a global installation, instead of temporary containers. (That or provisioning cloud resources and using a remote DB.)

To this end, the "easy route" has been taken of simply using SQLlite3. That said, from the perspective of a rails app using ActiveRecord, the distinction loses considerable importance due to the ORM abstraction layer.