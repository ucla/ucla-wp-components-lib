## Branch Info (BETA)

DURING BETA:

1. "main" - This is the "production" branch. Approved releases from the "development" branch should be merged into this branch. Changes in this branch triggers the pipeline to deploy to the "webcomponents.ucla.edu" S3 bucket.

1. "development" - This is the "development" branch. Approved releases from the "campus" branch should be merged into this branch. This will trigger the deployment pipeline to the "dev-webcomponents.ucla.edu" S3 bucket.

1. "campus" - Campus partners/developers should create their update branches and send PRs for their updates to merge into this branch. Once approved, reviewers should merge this branch into "development" branch.
