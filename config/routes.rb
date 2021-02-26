Rails.application.routes.draw do
  root 'departments#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :departments do
    resources :items
  end 
<<<<<<< HEAD
  
=======
>>>>>>> 9ac82fc33e62ca62690339dd9a2c19ae2e7762dc
end

