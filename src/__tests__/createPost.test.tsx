import { screen, render } from '@testing-library/react';
import CreatePost from "../components/createPost";

describe("<CreatePost />", () => {
    test('it should render the input', () => {
        render(<CreatePost/ >);
        expect(screen.getByPlaceholderText(/What's on your mind?/)).toBeTruthy();
    });

    test('it should render the add media section', () => {
        render(<CreatePost/ >);
        expect(screen.getByText(/Add Media/)).toBeTruthy();
    });

    test('it should render the go live section', () => {
        render(<CreatePost/ >);
        expect(screen.getByText(/Go Live/)).toBeTruthy();
    });

    test('it should render the post button', () => {
        render(<CreatePost/ >);
        expect(screen.getByText(/Post/)).toBeTruthy();
    });
})