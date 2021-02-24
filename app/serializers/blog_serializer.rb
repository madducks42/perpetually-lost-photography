class BlogSerializer < ActiveModel::Serializer
  attributes  :id, 
              :title, 
              :image, 
              :caption,
              :body,
              :category,
              :userSignedIn,
              :userIsAdmin

  def userSignedIn
    if !current_user
      return false
    else
      return true
    end
  end

  def userIsAdmin
    if !current_user
      return false
    else
      if current_user.role = "admin"
        return true
      else
        return false
      end
    end
  end


end