# TropiTracker API
This is the API that is (or will be) used by TropiTracker. All information is fetched from the NHC.

> [!WARNING]
> This API is currently in a very rudimentary state. Because of this, it is discouraged that you use this API in any official manner.

# Using
To use this in your applications, simply fetch https://api.tropitracker.com/index.json. 

> [!NOTE]
> There will be other ways to fetch individual products (ex fetching only hurricanes or only outlooks, etc), but as of now, you can only fetch the index.
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
    - Min pressure
    - Storm movement
    - Storm location
    - Latest NHC headline
    - Cone tracks (in experimental form, shows how far inland the warnings go)
    - Satellite gif of storm
    - Infrared satellite gif of storm
