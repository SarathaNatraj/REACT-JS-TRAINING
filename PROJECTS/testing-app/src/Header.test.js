import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";

describe('Testing React App', () => {

    let element;
    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
    })

    test('Header should have `React Testing` as brand name', () => {
        render(<BrowserRouter><Header /></BrowserRouter>);
        expect(screen.getByText('React Testing')).toBeInTheDocument();
    });

    test('Header component should have navbar-brand class', () => {
        render(<BrowserRouter><Header /></BrowserRouter>);
        expect(screen.getByTestId('brand')).toHaveClass('navbar-brand');
    });

    test('Header should have navbar with 3 links', () => {
        act(() => {
            createRoot(element).render(<BrowserRouter><Header /></BrowserRouter>);
        })
        const count = element.querySelectorAll('a').length;
        expect(count).toBe(3);
    });

    test('Header should have links with `nav-link` class', () => {
        act(() => {
            createRoot(element).render(<BrowserRouter><Header /></BrowserRouter>);
        });
        const links = element.querySelectorAll('a')
        for (let i = 1; i < links.length; i++) {
            expect(links[i]).toHaveClass('nav-link');
        }
    });

});

