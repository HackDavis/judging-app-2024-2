const Team = {
  bsonType: 'object',
  title: 'Team Object Validation',
  required: ['number', 'tracks', 'name', 'tech_emphasis', 'design_emphasis'],
  properties: {
    _id: {
      bsonType: 'objectId',
      description: '_id must be an ObjectId',
    },
    number: {
      bsonType: 'int',
      description: 'number must be an integer',
    },
    tracks: {
      bsonType: 'array',
      items: {
        bsonType: 'string',
      },
      description: 'tracks must be an array of strings',
    },
    name: {
      bsonType: 'string',
      description: 'name must be a string',
    },
    tech_emphasis: {
      bsonType: 'int',
      description: 'tech_emphasis must be an integer',
    },
    design_emphasis: {
      bsonType: 'int',
      description: 'design_emphasis must be an integer',
    },
  },
  additionalProperties: false,
};

export default Team;
