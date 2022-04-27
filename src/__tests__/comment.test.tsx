import { screen, render } from '@testing-library/react';
import Comment from "../components/comment";

const comment = {
    id: 0,
    content: "Content",
    title: "Title",
    subtitle: "Subtitle",
    stats: {
        hypes: 0,
        shares: 1,
        replies: 2,
        likes: 3
    }, 
    isLiked: false
}

describe("<Comment />", () => {
    test('it should render the content', () => {
        render(<Comment comment={comment} toggleLikeComment={() => {}} />)
        expect(screen.getByText(/Content/)).toBeTruthy();
    });

    test('it should render the title', () => {
        render(<Comment comment={comment} toggleLikeComment={() => {}} />)
        expect(screen.getByText(/Title/)).toBeTruthy();
    });

    test('it should render the subtitle', () => {
        render(<Comment comment={comment} toggleLikeComment={() => {}} />)
        expect(screen.getByText(/Subtitle/)).toBeTruthy();
    });

    test('it should render the hypes', () => {
        render(<Comment comment={comment} toggleLikeComment={() => {}} />)
        expect(screen.getByText(/0/)).toBeTruthy();
    });

    test('it should render the word Hypes', () => {
        render(<Comment comment={comment} toggleLikeComment={() => {}} />)
        expect(screen.getByText(/Hypes/)).toBeTruthy();
    });

    test('it should render the shares', () => {
        render(<Comment comment={comment} toggleLikeComment={() => {}} />)
        expect(screen.getByText(/1/)).toBeTruthy();
    });

    test('it should render the word Share', () => {
        render(<Comment comment={comment} toggleLikeComment={() => {}} />)
        expect(screen.getByText(/Share/)).toBeTruthy();
    });

    test('it should render the replies', () => {
        render(<Comment comment={comment} toggleLikeComment={() => {}} />)
        expect(screen.getByText(/2/)).toBeTruthy();
    });

    test('it should render the word Replies', () => {
        render(<Comment comment={comment} toggleLikeComment={() => {}} />)
        expect(screen.getByText(/Replies/)).toBeTruthy();
    });

    test('it should render the likes', () => {
        render(<Comment comment={comment} toggleLikeComment={() => {}} />)
        expect(screen.getByText(/3/)).toBeTruthy();
    });

    test('it should render the word Likes', () => {
        render(<Comment comment={comment} toggleLikeComment={() => {}} />)
        expect(screen.getByText(/Likes/)).toBeTruthy();
    });
});