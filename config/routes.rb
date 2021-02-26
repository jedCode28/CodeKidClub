Rails.application.routes.draw do
  root 'departments#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :departments do
    resources :items
  end 
  
end

