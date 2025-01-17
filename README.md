# TropiTracker API
This is the official API used by TropiTracker. All information is fetched from the NHC, and the API is updated every 5 minutes.

# Using
To get all outlooks, active tropical cyclones, & potential tropical cyclones, fetch https://api.tropitracker.com/index.json

To get all active hurricanes, fetch https://api.tropitracker.com/hurricanes.json

To get all active tropical storms, fetch https://api.tropitracker.com/tropical-storms.json

To get all active tropical depressions and potential tropical cyclones, fetch https://api.tropitracker.com/tropical-depressions.json

To get all tropical outlooks, fetch https://api.tropitracker.com/outlooks.json

# Capabilities
As of now, the API stores:

- Outlooks (Atlantic, Pacific, Eastern Pacific)

    - Outlook description
    - Two-day outlook map (with satellite)
    - Seven-day outlook map (no satellite)

- Active cyclones (everything that the default NHC RSS feeds store)

    - Storm type (hurricane, tropical storm, etc)
    - Storm name
    - Storm wallet
    - Latest advisory update time/date
    - Max sustained wind speeds
    - Min pressure
    - Storm movement
    - Storm location
    - Latest NHC headline

Along with a few extra features that the NHC does not natively store:
- Category (Saffir-Simpson scale, based off max. sustained winds)
- Cone tracks (newer NHC cone tracks which show how far inland the warnings go)
- Satellite gif
- Infrared satellite gif

# Want something added?
If you would like more features to be added, simply submit a request and I will respond as quick as I can.

> [!TIP]
> The storm name and wallet parameters can be used to find more tools for tracking these storms, such as more satellite gifs that the API doesn't store (however, feel free submit a feature request if there is something that you would like to be added).
