
# JSON File Requisition and Specialty Uses

Examples and use cases for manipulating Requisition ID's


## Used By

This project is used by the following company:



![Logo](https://camo.githubusercontent.com/714f8c0b64de2a0f03a70c07517a5da4e73dbdfe871697ebdc385d4a67807066/68747470733a2f2f7361726974686d2e636f6d2f696d616765732f6c6f676f2e706e67)


## Functions

```show requisition```: Display requisition based on inputed ID

```create requisition``` : Establish new requisition and new ID

 ```add skills``` : Append new additional skills for a requisition based on ID

```update requisition``` : Revise job requirements and details for a requisition based on ID

```list specialties``` : Display generic occupations and ID's for each available requisition

```list specialty``` : Detail primary skills for an occupation based on ID

```add specialty``` : Create new occupation and new ID

```update specialty``` : Revise primary skills for an occupation based on ID
## Pre-Procedures

1. First, we need to create a Slack channel for the requisition we want to create
2. Next, we open channel details to find the Slack channel ID code, this ID code will be used in our JSON file
3. Finally, create new JSON file and upload to Slack to curate the requisition to what seems fit using the available functions and the JSON file examples below

## JSON File Examples

Create Requisition
```
{
    "function":"create requisition",
    "data": { 
        "position_title":"AI Engineer",
        "specialty_code":13,
        "short_job_description":"Builds AI models using machine learning algorithms and deep learning neural networks to draw business insights",
        "job_description":"As an AI engineer, you need to perform certain tasks, such as develop, test, and deploy AI models through programming algorithms like random forest, logistic regression, linear regression, and so on.\n\n        Responsibilities include: \n        \n        Convert the machine learning models into application program interfaces (APIs) so that other applications can use it\n        Build AI models from scratch and help the different components of the organization (such as product managers and stakeholders) understand what results they gain from the model\n        Build data ingestion and data transformation infrastructure\n        Automate infrastructure that the data science team uses\n        Perform statistical analysis and tune the results so that the organization can make better-informed decisions\n        Set up and manage AI development and product infrastructure\n        Be a good team player, as coordinating with others is a must",
            "channel_info": "ai-engineer",
            "channelid": "C03G1RPRY1G",
        "employer_id":1,
        "due_date":  "2022-12-31"
    }
  }
  ```
Add Skills
  ```
  {
    "function":"add skills",
    "requisition_id": 75,
    "data": { 
        "swimming":5,
        "git":0,
        "postgres":3,
        "gambler":0
    }
}
```
Update Requisition
```
{
  "function":"update requisition",
  "requisition_id": 34,
  "data": { 
	  "position_title":"scrum java master",
	  "specialty_code":13,
	  "short_job_description":"The scrum master helps to facilitate scrum to the larger team by ensuring the scrum framework is followed",
	  "job_description": "Facilitate internal communication and effective collaboration,\n      Be the point of contact for external communications (e.g. from customers or stakeholders) \n      Work with product owners to handle backlogs and new requests\n      Resolve conflicts and remove obstacles that occur\n      Help teams implement changes effectively\n      Ensure deliverables are up to quality standards at the end of each sprint\n      Guide development teams to higher scrum maturity",

          "channel_info": "ats-development",
          "channelid": "C01KRSGAZL0",
	  "employer_id":1,
	  "due_date":  "2022-12-31"
  }
}
```
List Specialties
```
{
  "function":"list specialties",
  "data": {}
}
```
List Specialty 
```
{
  "function":"list specialty",
  "id": 15,
  "data": {}
}
```
Add Specialty
```
{
  "function":"add specialty",
  "id": 15,
   "specialty_name": "system_engineer",
  "data": {
     "unix": 5,
     "linux": 5,
     "scripting": 4,
     "python": 4
   }
}
```
Update Specialty
```
{
  "function":"update specialty",
  "id": 15,
   "specialty_name": "system_engineer",
  "data": {
     "unix": 5,
     "linux": 5,
     "scripting": 4,
     "python": 4,
     "kubernetes": 3,
     "docker": 3
   }
}
```

## Expected Responses

```create requisition``` : ```The new requisition created with requisition_id 75```

```add skills``` : ```new additional skills were added for requisition code 75```

```update requisition``` : ```requisition was updated for requisition code 34```

```list specialties``` : ```[(0, 'solution_architect'), (1, 'ux_engineer'), (2, 'qa_automation_engineer'), (3, 'devsecops'), (4, 'tech_writer'), (5, 'performance_engineer'), (6, 'caas_system_engineer'), (7, 'application_architect'), (8, 'devops'), (9, 'dc_lab_engineer'), (10, 'ui_developer'), (11, 'project_manager'), (12, 'scrum_master'), (13, 'java_developer'), (14, 'athlete')]```

```list specialty``` : ```[('responsibility', 5), ('project', 5), ('access', 1), ('test', 5), ('management', 5), ('release', 5), ('functional', 5), ('cross', 1), ('identification', 5), ('pass', 5), ('program', 5), ('iaas', 5), ('help', 5), ('solver', 5), ('waterfall', 5), ('documentation', 5), ('kanban', 1), ('certified', 5), ('leadership', 5), ('agile', 5), ('infrustructure', 5), ('sdlc', 5), ('coordination', 5), ('reports', 1), ('development', 1), ('scrum', 5), ('people', 5), ('saas', 5), ('identity', 5), ('problem', 5), ('cloud', 5), ('aws', 5), ('gcp', 5), ('linux', 5), ('pmp', 5)]```

```add specialty``` : ```new occupation created with specialty_code: 15```

```update specialty``` : ```skills were modified for specialty_code 15```