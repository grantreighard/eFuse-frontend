import { screen, render } from '@testing-library/react';
import Post from "../components/post";

const post = {
    id: 0,
    user: "Nickmercs",
    timestamp: Date.now(),
    content: "I like cats",
    stats: {
        hypes: 0,
        comments: 1,
        shares: 2,
        views: 3,
        likes: 4
    },
    isLiked: false,
    comments: []
}

describe("<Post />", () => {
    test('it should render the user', () => {
        render(<Post post={post} />);
        expect(screen.getByText(/Nickmercs/)).toBeTruthy();
    });

    test('it should render the timestamp info', () => {
        render(<Post post={post} />);
        expect(screen.getByText(/a few seconds ago/)).toBeTruthy();
    });

    test('it should render the content', () => {
        render(<Post post={post} />);
        expect(screen.getByText(/I like cats/)).toBeTruthy();
    });

    test('it should render the hypes', () => {
        render(<Post post={post} />);
        expect(screen.getByText(/0/)).toBeTruthy();
    });

    test('it should render the word Hypes', () => {
        render(<Post post={post} />);
        expect(screen.getByText(/Hypes/)).toBeTruthy();
    });

    test('it should render the comments', () => {
        render(<Post post={post} />);
        expect(screen.getByText(/1/)).toBeTruthy();
    });

    test('it should render the word Comment', () => {
        render(<Post post={post} />);
        expect(screen.getByText(/Comment/)).toBeTruthy();
    });

    test('it should render the shares', () => {
        render(<Post post={post} />);
        expect(screen.getByText(/2/)).toBeTruthy();
    });

    test('it should render the word Shares', () => {
        render(<Post post={post} />);
        expect(screen.getByText(/Shares/)).toBeTruthy();
    });

    test('it should render the views', () => {
        render(<Post post={post} />);
        expect(screen.getByText(/3/)).toBeTruthy();
    });

    test('it should render the word Views', () => {
        render(<Post post={post} />);
        expect(screen.getByText(/Views/)).toBeTruthy();
    });

    test('it should render the likes', () => {
        render(<Post post={post} />);
        expect(screen.getByText(/4/)).toBeTruthy();
    });

    test('it should render the word Likes', () => {
        render(<Post post={post} />);
        expect(screen.getByText(/Likes/)).toBeTruthy();
    });
})