class BlogShowSerializer < ActiveModel::Serializer
  attributes  :id, 
              :title, 
              :image, 
              :caption,
              :body,
              :category,
              :dateCreated,
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

  def dateCreated
    object.created_at.strftime('%B %Y')
  end


end