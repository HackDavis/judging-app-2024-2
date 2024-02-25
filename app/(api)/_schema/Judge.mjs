const Judge = {
  bsonType: 'object',
  title: 'Judge Object Validation',
  properties: {
    _id: {
      bsonType: 'objectId',
      description: '_id must be an ObjectId',
    },
    name: {
      bsonType: 'string',
      description: 'name must be a string',
    },
    email: {
      bsonType: 'string',
      pattern: '^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$',
      description: 'email must be a string and have a valid format',
    },
    password: {
      bsonType: 'string',
      description: 'encrypted password must be a string',
    },
    specialty: {
      enum: ['tech', 'nontech', 'design'],
      description: 'specialty must be either tech, nontech, or design',
    },
    judge_pair_id: {
      bsonType: ['objectId', 'null'],
      description: 'judge_pair_id must be an ObjectId',
    },
    submission_ids: {
      bsonType: ['array', 'null'],
      items: {
        bsonType: 'objectId',
      },
      description: 'submission_ids must be an array of ObjectIds',
    },
  },
  additionalProperties: false,
};

export default Judge;
