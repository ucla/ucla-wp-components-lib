## Branch Info (BETA)

DURING BETA:

1. "main" - This is the "production" branch. Approved releases from the "development" branch should be merged into this branch. Changes in this branch triggers the pipeline to deploy to the "webcomponents.ucla.edu" S3 bucket.

1. "development" - This is the "development" branch. Approved releases from the "semantic-check" branch should be merged into this branch. This will trigger the deployment pipeline to the "dev-webcomponents.ucla.edu" S3 bucket and trigger semantic-release library.

1. "semantic-check" - This is the branch that will internal SC developers will be responsible for executing the semantic-release library. This branch and process change was included to simplify contributions from the community. Please see the [Semantic Release Flow Documentation](https://bitbucket.org/uclaucomm/ucla-bruin-components/src/semantic-check/docs/internal/semanticReleaseFlow.md) for more info on how to execute the semantic-release library.

1. "campus" - Campus partners/developers should create their update branches and send PRs for their updates to merge into this branch. Once approved, reviewers should merge this branch into "semantic-check" branch.

 - [Go Back to Main README](https://bitbucket.org/uclaucomm/ucla-bruin-components/src/campus/)
