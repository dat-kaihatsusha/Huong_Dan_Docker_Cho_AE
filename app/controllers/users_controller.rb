class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :user_params, only: [:create, :destroy]
  before_action :correct_user, only: [:edit, :update, :destroy]

  def index
    @users = User.all
  end

  def create
    @user = User.new user_params
    if @user.save!
      render json: {user: @user, count: User.all.count}, status: :ok
    end
  end

  def destroy
    @user.destroy
  end

  private
  def user_params
    params.require(:user).permit(:id, :name, :email, :address)
  end

  def correct_user
    @user = User.find(params[:id])
  end

end
