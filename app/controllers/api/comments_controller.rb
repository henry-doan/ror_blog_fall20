class Api::CommentsController < ApplicationController
  before_action :set_post

  def index
    render json: @post.comments
  end

  def create
    comment = @post.comments.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: { errors: comment.errors }, status: :unprocessable_entity
    end
  end

  def update
    comment = @post.comments.find(params[:id])
    if comment.update(comment_params)
      render json: comment
    else
      render json: { errors: comment.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @post.comments.find(params[:id]).destroy
    render json: { message: 'Comment Deleted' }
  end

  private 
    def set_post
      @post = Post.find(params[:post_id])
    end

    def comment_params
      params.require(:comment).permit(:author, :subject, :body)
    end
end
