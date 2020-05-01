const dev = {
  STRIPE_KEY: "pk_test_FIM2KEsgcxprLO0ae5N9UQoT00qMeFxXBR",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "wesjournal-api-dev-attachmentsbucket-1w9lgqdldmgij"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "api.fieldofwez.com/dev"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_n37XWklDl",
    APP_CLIENT_ID: "6jq0h4nb3tpcnlepoqg6bj3c8t",
    IDENTITY_POOL_ID: "eu-central-1:378e9afb-ef8e-4dc8-93f8-b223f61a44af"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_FIM2KEsgcxprLO0ae5N9UQoT00qMeFxXBR",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "wesjournal-api-prod-attachmentsbucket-1o3uqcun220ux"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "api.fieldofwez.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_avzFdfZP9",
    APP_CLIENT_ID: "43grlvoti87n4mqo1vbtsc2cbm",
    IDENTITY_POOL_ID: "eu-central-1:c7ab7aa3-98ac-4975-b4e0-72e9b23eb8be"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
  };



