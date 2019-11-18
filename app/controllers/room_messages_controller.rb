class RoomMessagesController < ApplicationController
  before_action :load_entities
  def create
    @room_message = RoomMessage.create user: current_user,
                                       room: @room,
                                       message: params.dig(:room_message, :message)
    broadcast_msg = @room_message.attributes
    broadcast_msg["user_avatar_url"] = current_user.gravatar_url
    broadcast_msg["username"] = current_user.username
    RoomChannel.broadcast_to @room,broadcast_msg #要用Redis+ActionCable就多這行
    # RoomChannel.broadcast_to @room,@room_message #要用Redis+ActionCable就多這行
  end

  protected

  def load_entities
    @room = Room.find params.dig(:room_message, :room_id)
  end
end
