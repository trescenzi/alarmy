# Alarmy

This simple alarm allows you to set an alarm anytime within the next 24 hours.

Alarmy is [hosted on heroku](https://alarmy.herokuapp.com).

## Building

- `yarn install`
- `yarn build`

This app uses webpack to pack both the JavaScript and the CSS. First make sure to install
the dependencies and then build it with `yarn build`.

## Usage

Alarmy is intended to be used by serving `index.html`. For local development `yarn run` will provide an easy way to serve it.

# Next Steps

## Cleanleness
- Add tests!
- Split up the CSS
- Make generateInitialClockDom not a terrible mess

## Enhancments
- Add feedback when an alarm is set
  - Currently the only way to know if the alarm set actually did anything is to notice the circle starting to fill in
- Allow for setting of multiple alarms
  - The circle timer would count down to the next alarm
  - Subsequent alarms would be displayed as a list beneth the `Set Alarm` button
  - They could be edited or cleared by clicking on them
- Allow for repeating alarms
  - Alarms would be allowed to be set for specific days of the week
- Add optional sound upon alarm
- Use service workers to allow this app to work on mobile devices well
  - Also add a vibration pattern for mobile devices
- Add a night time colorscheme for when it's night time

## Known Bugs

- Won't work at the end of a Month or Year
  - Would have to account for the change in a month/year not just a day
- The circle filling in starts to bug out at the bottom towards the last 30% of the alarm
- There's no real checking for if the alarm you set will work
- Since it's using `contenteditable` it's easy for a user to mess up the styling
- Notifications don't work when `index.html` isn't served. This might just be an OSX thing I hadn't run into before.
