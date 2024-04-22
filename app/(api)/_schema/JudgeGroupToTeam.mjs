const JudgeGroupToTeam = {
  bsonType: 'object',
  title: 'JudgeGroupToTeam Object Validation',
  properties: {
    _id: {
      bsonType: 'objectId',
      description: '_id must be an ObjectId',
    },
    judge_group_id: {
      bsonType: 'objectId',
      description: 'judge_group_id must be an ObjectId',
    },
    team_id: {
      bsonType: 'objectId',
      description: 'team_id must be an ObjectId',
    },
  },
  additionalProperties: false,
};

export default JudgeGroupToTeam;
