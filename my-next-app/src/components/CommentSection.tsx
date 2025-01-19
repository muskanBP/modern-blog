import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Interface for Comment
interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editedText, setEditedText] = useState("");

  // Handle adding a new comment
  const handleAddComment = () => {
    if (!authorName.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!newComment.trim()) {
      setError("Please write a comment.");
      return;
    }
    
    const newEntry: Comment = {
      id: Date.now().toString(),
      author: authorName,
      text: newComment,
    };
    
    setComments([...comments, newEntry]);
    setNewComment("");
    setAuthorName("");
    setError(null);
  };

  // Handle editing a comment
  const handleEditComment = (id: string, text: string) => {
    setEditingCommentId(id);
    setEditedText(text);
  };

  const handleSaveEdit = (id: string) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id ? { ...comment, text: editedText } : comment
      )
    );
    setEditingCommentId(null);
    setEditedText("");
  };

  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setEditedText("");
  };

  return (
    <Card className="bg-black/85 text-white/70 shadow-lg ring-offset-emerald-800 p-4">
      <CardContent>
        <h3 className="text-lg font-semibold text-emerald-300 mb-4 animate-pulse">
          Comments
        </h3>
        
        {error && <p className="text-red-500 mb-2">{error}</p>}
        
        <div>
          {comments.map((comment) => (
            <div key={comment.id} className="mb-4">
              {editingCommentId === comment.id ? (
                <div className="flex flex-col">
                  <Input
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="mb-2 text-white/75 bg-black/70"
                  />
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleSaveEdit(comment.id)}
                      className="bg-emerald-400 hover:bg-emerald-500 text-black"
                    >
                      Save
                    </Button>
                    <Button
                      onClick={handleCancelEdit}
                      className="bg-red-500 hover:bg-red-600 text-white"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between">
                  <p className="text-white/75">
                    <strong className="text-emerald-300">{comment.author}</strong>
                    : {comment.text}
                  </p>
                  <Button
                    onClick={() => handleEditComment(comment.id, comment.text)}
                    className="bg-emerald-400 hover:bg-emerald-500 text-black"
                  >
                    Edit
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Fields for Adding a Comment */}
        <div className="mt-4">
          <Input
            value={authorName}
            placeholder="Enter your name"
            onChange={(e) => setAuthorName(e.target.value)}
            className="mb-2 bg-black/70 text-white/75"
          />
          <Input
            value={newComment}
            placeholder="Write a comment..."
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-2 bg-black/70 text-white/75"
          />
        </div>
        
        <Button
          onClick={handleAddComment}
          className="mt-2 bg-emerald-400 hover:bg-emerald-500 text-black"
        >
          Add Comment
        </Button>
      </CardContent>
    </Card>
  );
} 