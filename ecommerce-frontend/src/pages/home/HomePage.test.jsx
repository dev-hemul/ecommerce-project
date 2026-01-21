import {it, expect, describe, vi, beforeEach} from 'vitest';
import {HomePage} from './HomePage';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

vi.mock('axios');

describe('HomePage component', () => {

  let loadCart;

  beforeEach(() => {
    loadCart = vi.fn();
  })

  it('displays the products correct', () => {
    render(<HomePage cart={[]} loadCart={loadCart}/>);
  });
})