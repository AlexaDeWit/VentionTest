# Vention Interview Test

## Getting It Running

### FrontEnd

### Backend


## Note

At present my full time personal development machine is in storage in preparation for my move. As such this project was implemented on a Surface Go, which runs Windows 10 Home.

As a consequence of this, Docker is not viable to run. My initial intention was to allow the evaluator to simply `docker-compose up`.

Additionally as a consequence of this, using a more robust database implementation would require a global installation, instead of temporary containers. (That or provisioning cloud resources and using a remote DB.)

To this end, the "easy route" has been taken of simply using SQLlite3. That said, from the perspective of a rails app using ActiveRecord, the distinction loses considerable importance due to the ORM abstraction layer.