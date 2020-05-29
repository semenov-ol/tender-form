import React, { createContext } from "react";

interface Classification {
  scheme: "CPV";
  id: string;
  description: string;
}

type Unit =
  | {
      id: "123";
      name: "metre";
    }
  | {
      id: "321";
      name: "kilo";
    };

interface Data {
  tender: {
    title: string;
    description: string;
    classification: Classification;
    lots: {
      id: string;
      title: string;
    }[];
    items: {
      id: string;
      description: string;
      relatedLot: string;
      classification: Classification;
      additionalClassification: Classification[];
      quantity: number;
      unit: Unit;
    }[];
  };
}

const FormState: Data = {
  tender: {
    title: "",
    description: "",
    classification: {
      scheme: "CPV",
      id: "",
      description: "",
    },
    lots: [
      {
        id: "",
        title: "",
      },
    ],
    items: [
      {
        id: "",
        description: "",
        relatedLot: "",
        classification: {
          scheme: "CPV",
          id: "",
          description: "",
        },
        additionalClassification: [
          {
            scheme: "CPV",
            id: "",
            description: "",
          },
        ],
        quantity: 0,
        unit: {
          id: "123",
          name: "metre",
        },
      },
    ],
  },
};

export const FormContext = createContext(FormState);
