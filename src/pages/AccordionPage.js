import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "dqhgdh",
      label: "can I use react on a project?",
      content:
        "you can use, on any project you want. you can use, on any project you want. you can use, on any project you want.",
    },
    {
      id: "fb34to",
      label: "can I use java scripy on a project?",
      content:
        "you can use, on any project you want. you can use, on any project you want. you can use, on any project you want.",
    },
    {
      id: "sfhqpqq",
      label: "can I use python on a project?",
      content:
        "you can use, on any project you want. you can use, on any project you want. you can use, on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
