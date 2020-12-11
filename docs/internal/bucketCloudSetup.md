## Bucket + Cloud(S3) URLs (BETA)

| Branch | Cloud URL | S3 Bucket URL |
|-|-|-|
| main | https://webcomponents.ucla.edu | https://s3.console.aws.amazon.com/s3/buckets/webcomponents.ucla.edu/?region=us-west-1 |
| development | http://dev-webcomponents-ucla-edu.s3-website-us-west-1.amazonaws.com | https://s3.console.aws.amazon.com/s3/buckets/dev-webcomponents-ucla-edu/?region=us-west-1 |
| campus | not setup | not setup |

## CDN Distribution and Invalidation Information (BETA)
* This project's documentation and component public library in production environment is deployed behind Cloudfront CDN. To see updates instantly after updates have been to production, you must manually invalidate the files. See the distribution page for the documentation [here](https://console.aws.amazon.com/cloudfront/home?region=us-west-1#distribution-settings:E3BKWM01VHPJ5I) or for the public library [here](https://console.aws.amazon.com/cloudfront/home?region=us-west-1#distribution-settings:EUU3JRBWPI1HQ). For more on "how to invalidate" see the AWS docs [here](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html).
* A CDN distribution and DNS configuration have not been configured for the development environment public library. That means the URLs to the public library shown in the "Download" page in development will not work. To view the public styles and scripts, please navigate to the URL in the [S3 bucket](https://s3.console.aws.amazon.com/s3/buckets/dev-webcomponents-ucla-edu/public/?region=us-west-1&tab=overview). The path looks similar to this - http://dev-webcomponents-ucla-edu.s3-us-west-1.amazonaws.com/public/x.x.x/css/ucla-lib.min.css
