import { Children, ReactNode, useState } from "react";
import { Container, TabHeader, TabButton } from "./styles";

type TabProps = {
  children: ReactNode;
  labels: string[];
};

export function Tab({ children, labels }: TabProps) {
  const [index, setIndex] = useState(0);
  return (
    <Container>
      <TabHeader>
        {labels.map((label, i) => (
          <TabButton
            active={index === i}
            onClick={() => setIndex(i)}
            key={label}
          >
            {label}
          </TabButton>
        ))}
      </TabHeader>
      {Children.toArray(children)[index]}
    </Container>
  );
}
