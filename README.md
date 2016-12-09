# Ng2HeroMerge

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##Create Your Own Hero
An API for creating super heroes.

The Assignment
Create a client side app, in the framework / using the libraries of your choice that would allow a user to:

Create a brand new super hero.
Should require:
A “super hero name”
A real name
Points in all atrributes
A list of powers
A list of weaknesses
Merge two super heroes into a new super hero.
User should be able to:
Choose which attributes from either super hero the user would like to use
Choose up to, but not over, 5 super powers total
Name their hero (super hero name, as well as real name)
The new hero should have the weaknesses of both super heroes
The application should be written with your time in mind, we ask that you don’t spend more than 5 hours working on it, but if you’d like to, that's fine as well! The application doesn’t need to be completely finished in order to hand it in; we just want to see how you approach the problem.

The app should be handed in within a week of the date assigned with the following:

The source of the app
A gzip or other is fine, on Github would be great too.
A short write up of:
How to run the app
An estimate of how much time was spent developing
What you would have done if given more time
Most importantly, have fun with it! This is your chance to show us what you’ve got!

Getting an API Key
In order to develop against the API, you’ll need a key. To obtain a key, hit https://hero-merge.herokuapp.com/getApiKey.

The returned key is yours! Then just hit https://hero-merge.herokuapp.com/[your-api-key]/heroes to get the initial data back.

API
The API contains a single endpoint, heroes, which supports GET, POST, and PATCH requests.

GET [your-api-key]/heroes
Returns a list of all available heroes.

Example request:

GET /7c023f01/heroes HTTP/1.1
Accept: application/json
Host: hero-merge.herokuapp.com
User-Agent: HTTPie/0.9.2
Example response:

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Fri, 20 Nov 2015 14:18:57 GMT

[
    {
        "id": 3,
        "hero_name": "Super Man",
        "real_name": "Clark Kent (Kal-El)",
        "gender": "Male",
        "attributes": {
            "intelligence": 100,
            "strength": 100,
            "speed": 100,
            "durability": 100,
            "power": 100,
            "combat": 65
        },
        "powers": [
            "Flight",
            "Super-strength",
            "Super Speed",
            "Super Hearing",
            "Super Smell",
            "Healing Factor",
            "Super Breath",
            "Heat Vision",
            "Super Vision"
        ],
        "weaknesses": [
            "Magic",
            "Kryptonite",
            "Lead",
            "Solar Energy"
        ]
    },
    ...
]
GET [your-api-key]/heroes/{id}
Returns a single hero’s information

Example request:

GET /7c023f01/heroes/1 HTTP/1.1
Accept: application/json
Host: hero-merge.herokuapp.com
Example response:

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Fri, 20 Nov 2015 14:18:57 GMT

{
    "id": 3,
    "hero_name": "Super Man",
    "real_name": "Clark Kent (Kal-El)",
    "gender": "Male",
    "attributes": {
        "intelligence": 100,
        "strength": 100,
        "speed": 100,
        "durability": 100,
        "power": 100,
        "combat": 65
    },
    "powers": [
        "Flight",
        "Super-strength",
        "Super Speed",
        "Super Hearing",
        "Super Smell",
        "Healing Factor",
        "Super Breath",
        "Heat Vision",
        "Super Vision"
    ],
    "weaknesses": [
        "Magic",
        "Kryptonite",
        "Lead",
        "Solar Energy"
    ]
}
POST [your-api-key]/heroes
Create a new hero. The id will be automatically generated. All other fields need to be provided in JSON format. See the GET example above for the list of expected fields.

Example request:

POST /7c023f01/heroes HTTP/1.1
Accept: application/json
Content-Type: application/json
Host: hero-merge.herokuapp.com

{
    "hero_name": "Super Man",
    "real_name": "Clark Kent (Kal-El)",
    ...
}
Example response:

HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8
Date: Fri, 20 Nov 2015 14:18:57 GMT

{
    "id": 11,
    "hero_name": "Super Man",
    "real_name": "Clark Kent (Kal-El)",
    ...
}
PATCH [your-api-key]/heroes/{id}
Update an existing hero. Fields must to be provided in JSON format. Fields that are not provided in the request body will not be updated.

Example request:

PATCH /7c023f01/heroes/1 HTTP/1.1
Accept: application/json
Content-Type: application/json
Host: hero-merge.herokuapp.com

{
    "hero_name": "Super Woman"
}
Example response:

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Fri, 20 Nov 2015 14:18:57 GMT

{
    "hero_name": "Super Woman",
    "real_name": "Clark Kent (Kal-El)",
    ...
}

