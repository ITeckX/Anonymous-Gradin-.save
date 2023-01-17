import { faker } from "@faker-js/faker";
import { sample } from "lodash";

// ----------------------------------------------------------------------

const createObject = () => {
  const id = faker.datatype.uuid();
  const project = sample([
    {
      title: "fix: build: use GOCC when building lotus-fountain",
      subtitle: "filecoin-project/lotus",
      link: "https://www.google.com",
    },
    {
      title: "feat: sealing: SectorPipelineStats api",
      subtitle: "filecoin-project/lotus",
      link: "https://www.google.com",
    },
  ]);
  const projectTitle = project.title;
  const projectSubtitle = project.subtitle;
  const projectLink = project.link;
  const person = sample([
    {
      name: "Aloxaf",
      link: "https://www.google.com",
    },
    {
      name: "magik6k",
      link: "https://www.google.com",
    },
    {
      name: "simlecode",
      link: "https://www.google.com",
    },
    {
      name: "ZenGround0",
      link: "https://www.google.com",
    },
  ]);
  const personName = person.name;
  const personLink = person.link;
  const nota = 10;

  return {
    id: id,
    projectTitle: projectTitle,
    projectSubtitle: projectSubtitle,
    projectLink: projectLink,
    personName: personName,
    personLink: personLink,
    nota: nota,
  };
};

const PRData = [...Array(24)].map(() => {
  return createObject();
 
});


export default PRData;
