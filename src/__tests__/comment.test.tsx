import { render, screen, waitFor } from "@testing-library/react";

import Comment from "../components/comment";

const comment = {
    id: 0,
    content: "Test",
    title: "Test",
    subtitle: "Test",
    stats: {
        hypes: 0,
        shares: 0,
        replies: 0,
        likes: 0
    }, 
    isLiked: false
}

describe("<Comment />", () => {
    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
      });
});