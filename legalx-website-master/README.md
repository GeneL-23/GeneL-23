# LegalX Static Website

## Hosting
Hosting and CI/CI is provided by Netlify. Website and website content is stored on github under legalx-website private repo.

## Submodules
After cloning the repo, you should run the following to update the submodules:
```
git submodule update --init
```

## Development
Run:

```
hugo server -D
```

## Staging
```
hugo --minify --environment staging
```

## Production
```
hugo --minify --environment production
```
