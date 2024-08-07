import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";
import FlashProvider from '../src/contexts/FlashProvider';
import ApiProvider from '../src/contexts/ApiProvider';
import UserProvider, { useUser } from '../src/contexts/UserProvider';

const realFetch = global.fetch;

beforeEach(() => {
  global.fetch = vitest.fn();
});

afterEach(() => {
  global.fetch = realFetch;
  localStorage.clear();
});