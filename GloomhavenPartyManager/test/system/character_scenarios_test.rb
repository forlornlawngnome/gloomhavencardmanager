require "application_system_test_case"

class CharacterScenariosTest < ApplicationSystemTestCase
  setup do
    @character_scenario = character_scenarios(:one)
  end

  test "visiting the index" do
    visit character_scenarios_url
    assert_selector "h1", text: "Character Scenarios"
  end

  test "creating a Character scenario" do
    visit character_scenarios_url
    click_on "New Character Scenario"

    fill_in "Character", with: @character_scenario.character_id
    fill_in "Experience", with: @character_scenario.experience
    fill_in "Gold", with: @character_scenario.gold
    fill_in "Health", with: @character_scenario.health
    check "Is disarm" if @character_scenario.is_disarm
    check "Is immobilize" if @character_scenario.is_immobilize
    check "Is invisible" if @character_scenario.is_invisible
    check "Is muddle" if @character_scenario.is_muddle
    check "Is poison" if @character_scenario.is_poison
    check "Is strengthen" if @character_scenario.is_strengthen
    check "Is stun" if @character_scenario.is_stun
    check "Is wound" if @character_scenario.is_wound
    fill_in "Scenario", with: @character_scenario.scenario_id
    click_on "Create Character scenario"

    assert_text "Character scenario was successfully created"
    click_on "Back"
  end

  test "updating a Character scenario" do
    visit character_scenarios_url
    click_on "Edit", match: :first

    fill_in "Character", with: @character_scenario.character_id
    fill_in "Experience", with: @character_scenario.experience
    fill_in "Gold", with: @character_scenario.gold
    fill_in "Health", with: @character_scenario.health
    check "Is disarm" if @character_scenario.is_disarm
    check "Is immobilize" if @character_scenario.is_immobilize
    check "Is invisible" if @character_scenario.is_invisible
    check "Is muddle" if @character_scenario.is_muddle
    check "Is poison" if @character_scenario.is_poison
    check "Is strengthen" if @character_scenario.is_strengthen
    check "Is stun" if @character_scenario.is_stun
    check "Is wound" if @character_scenario.is_wound
    fill_in "Scenario", with: @character_scenario.scenario_id
    click_on "Update Character scenario"

    assert_text "Character scenario was successfully updated"
    click_on "Back"
  end

  test "destroying a Character scenario" do
    visit character_scenarios_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Character scenario was successfully destroyed"
  end
end
