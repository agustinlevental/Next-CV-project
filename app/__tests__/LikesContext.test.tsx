
import React from 'react';
import { render, screen } from '@testing-library/react';
import { LikesProvider, useLikes, Interest } from '../context/LikesContext';

const TestComponent = () => {
  const { interests } = useLikes();
  return (
    <div>
      {interests.map((interest: Interest) => (
        <div key={interest.id}>{interest.name}</div>
      ))}
    </div>
  );
};

describe('LikesContext', () => {
  /**
 * @jest-environment jsdom
 */
  test('provides interests to its children', () => {
    render(
      <LikesProvider>
        <TestComponent />
      </LikesProvider>
    );

    expect(screen.getByText('Programar')).toBeInTheDocument();
    expect(screen.getByText('Jugar al futbol')).toBeInTheDocument();
    expect(screen.getByText('Hacer teatro')).toBeInTheDocument();
  });
});