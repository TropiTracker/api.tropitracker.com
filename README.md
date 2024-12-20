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

- Active cyclones

    - Storm type (hurricane, tropical storm, etc)
    - Storm name
    - Storm wallet
    - Latest advisory update time/date
    - Max sustained wind speeds
    - Category (based off of the Saffir-Simpson scale)
    - Min pressure
    - Storm movement
    - Storm location
    - Latest NHC headline
    - Cone tracks (in experimental form, shows how far inland the warnings go)
    - Satellite gif of storm
    - Infrared satellite gif of storm
