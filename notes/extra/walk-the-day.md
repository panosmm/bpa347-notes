# Extra activity · Walk the Day

Your agent draws each day of your trip on the map as a walk: the streets from one stop to the next, and how many minutes each walk takes.

## Before you start

- The trip app from Monday's class, in the `bpa347-week6` folder, with a terminal open there and the agent running in it.

## Steps

1. Paste:
   ```prompt
   Draw each day's walking route between its stops on the map, in the order of the plan, with the walking time from each stop to the next. Use a free walking route service that needs no account. Where the plan takes a taxi or a tram, show that instead of a walk. When I choose a day, zoom the map to that day's walk.
   ```
2. Open the app again and choose each day. Check the walks yourself:
   - Does each line follow the streets?
   - Are the times close to the times in your report? About 12 minutes for each kilometre is a normal walk. If a walk of 1 kilometre takes 3 minutes, these are car times: tell the agent.
   - Ask the agent for specific changes, then check again.
3. Save a version:
   ```prompt
   Save this version with Git, with the message "Walking routes for each day".
   ```

## 1. Routes from another service

- Your app does not find the way itself. It asks a route service: it sends two points and gets back the line along the streets and the time.

## Terms

- **Route service**: a service that finds the way between two places and how long it takes, on foot, by car or by bike.
